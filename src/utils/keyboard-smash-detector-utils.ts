/**
 * Detects if a string is likely a keyboard smash based on multiple heuristics
 * @param text - The text to analyze
 * @param options - Configuration options for detection sensitivity
 * @returns Object with validation result and failure reason
 */
export function isKeyboardSmash(
  text: string,
  options: {
    /** Minimum text length to validate (shorter strings are considered valid). */
    minLength?: number
    /** Maximum allowed consecutive repeating characters (e.g., "aaaaa") */
    maxRepeatingChars?: number
    /** Maximum allowed consecutive QWERTY keyboard keys (e.g., "qwerty") */
    maxConsecutiveKeys?: number
    /** Maximum length for a single word without spaces/punctuation */
    maxSingleWordLength?: number
    /** Minimum required unique characters relative to text length */
    minUniqueChars?: number
    /** Whether to check for QWERTY keyboard patterns */
    checkQwertyPatterns?: boolean
    /** Whether to check for invalid English digraphs */
    checkInvalidDigraphs?: boolean
    /** Minimum number of invalid digraphs required to flag as keyboard smash */
    minInvalidDigraphs?: number
  } = {}
): { isValid: boolean; failureReason: string } {
  const {
    minLength = 0,
    maxRepeatingChars = 4,
    maxConsecutiveKeys = 4,
    minUniqueChars = 3,
    maxSingleWordLength = 11,
    checkQwertyPatterns = true,
    checkInvalidDigraphs = true,
    minInvalidDigraphs = 2
  } = options

  if (!text || text.length < minLength) {
    return { isValid: true, failureReason: '' }
  }

  const cleanText = text.toLowerCase().replace(/[^a-z0-9]/g, '')

  if (cleanText.length < minLength) {
    return { isValid: true, failureReason: '' }
  }

  // Check for numbers only
  if (/^\d+$/.test(cleanText)) {
    return { isValid: false, failureReason: 'Text contains only numbers' }
  }

  // Check for single long word (no spaces or punctuation)
  if (
    cleanText.length > maxSingleWordLength &&
    !/\s/.test(text) &&
    !/[.,!?;:]/.test(text)
  ) {
    return { isValid: false, failureReason: 'Text is a single long word' }
  }

  // Check for excessive repeating characters
  if (hasExcessiveRepeatingChars(cleanText, maxRepeatingChars)) {
    return {
      isValid: false,
      failureReason: 'Text contains excessive repeating characters'
    }
  }

  // Check for too few unique characters relative to length
  const uniqueChars = new Set(cleanText).size
  if (uniqueChars < Math.min(minUniqueChars, cleanText.length / 2)) {
    return {
      isValid: false,
      failureReason: 'Text contains too few unique characters'
    }
  }

  // Check for invalid English digraphs
  if (
    checkInvalidDigraphs &&
    hasInvalidEnglishDigraphs(cleanText, minInvalidDigraphs)
  ) {
    return {
      isValid: false,
      failureReason: 'Text contains multiple invalid English digraphs'
    }
  }

  // Check for QWERTY keyboard patterns
  if (checkQwertyPatterns && hasQwertyPattern(cleanText, maxConsecutiveKeys)) {
    return {
      isValid: false,
      failureReason: 'Text contains QWERTY keyboard patterns'
    }
  }

  // Check for random-looking character distribution
  if (hasRandomDistribution(cleanText)) {
    return {
      isValid: false,
      failureReason: 'Text has suspicious character distribution patterns'
    }
  }

  return { isValid: true, failureReason: '' }
}

/**
 * Checks for excessive repeating characters (e.g., "aaaa", "1111")
 */
export function hasExcessiveRepeatingChars(
  text: string,
  maxRepeating: number
): boolean {
  const regex = new RegExp(`(.)\\1{${maxRepeating},}`)
  return regex.test(text)
}

/**
 * Checks for QWERTY keyboard patterns (adjacent keys pressed in sequence)
 * WARNING: case sensitive. Assuming you have already lowercased the input
 */
export function hasQwertyPattern(
  text: string,
  maxConsecutive: number
): boolean {
  const qwertyRows = [
    // Standard rows
    'qwertyuiop',
    'asdfghjkl',
    'zxcvbnm',
    // Common permutations and variations
    'poiuytrewq', // reverse top row
    'lkjhgfdsa', // reverse middle row
    'mnbvcxz', // reverse bottom row
    // Shifted rows (common patterns when shift is held)
    'qazwsxedcrfvtgbyhnujmikolp', // left-to-right diagonal
    'plokimjunhybgtvfrcdexswzaq', // right-to-left diagonal
    // Cross-row patterns
    'qaz',
    'wsx',
    'edc',
    'rfv',
    'tgb',
    'yhn',
    'ujm',
    'ik',
    'ol',
    'p',
    'zaq',
    'xsw',
    'cde',
    'vfr',
    'bgt',
    'nhy',
    'mju',
    'ki',
    'lo',
    'p',
    // Home row to other rows
    'asd',
    'sdf',
    'dfg',
    'fgh',
    'ghj',
    'hjk',
    'jkl',
    'dsa',
    'fds',
    'gfd',
    'hgf',
    'jhg',
    'kjh',
    'lkj'
  ]

  for (const row of qwertyRows) {
    // Check for consecutive keys in forward direction
    for (let i = 0; i <= row.length - maxConsecutive; i++) {
      const pattern = row.substring(i, i + maxConsecutive)
      if (text.includes(pattern)) {
        return true
      }
    }

    // Check for consecutive keys in reverse direction
    const reversedRow = row.split('').reverse().join('')
    for (let i = 0; i <= reversedRow.length - maxConsecutive; i++) {
      const pattern = reversedRow.substring(i, i + maxConsecutive)
      if (text.includes(pattern)) {
        return true
      }
    }
  }

  return false
}

/**
 * Checks for patterns that suggest random key mashing
 */
export function hasRandomDistribution(text: string): boolean {
  // Check consonant to vowel ratio (real words have more balanced ratios)
  const vowels = 'aeiouy'
  const consonants = 'bcdfghjklmnpqrstvwxz'

  let vowelCount = 0
  let consonantCount = 0

  for (const char of text) {
    if (vowels.includes(char)) {
      vowelCount += 1
    } else if (consonants.includes(char)) {
      consonantCount += 1
    }
  }

  if (vowelCount === 0) return true

  const totalLetters = vowelCount + consonantCount
  // Don't evaluate if there are too few letters
  if (totalLetters < 10) return false

  const vowelRatio = vowelCount / totalLetters

  // Suspicious if less than 10% or more than 70% vowels
  if (vowelRatio < 0.1 || vowelRatio > 0.7) {
    return true
  }
  // Check for alternating pattern that's too regular (like "ababab")
  if (text.length >= 6) {
    const firstHalf = text.substring(0, Math.floor(text.length / 2))
    const secondHalf = text.substring(Math.floor(text.length / 2))

    // Simple alternating pattern detection
    let alternatingCount = 0
    for (let i = 0; i < Math.min(firstHalf.length, secondHalf.length); i++) {
      if (firstHalf[i] === secondHalf[i]) {
        alternatingCount += 1
      }
    }

    // If more than 80% of characters match in position, it's suspicious
    if (
      alternatingCount / Math.min(firstHalf.length, secondHalf.length) >
      0.8
    ) {
      return true
    }
  }

  // check for triplet patterns like "abcabcabc"
  const tripletRegex = /(.{3})\1{2,}/
  if (tripletRegex.test(text)) {
    return true
  }

  // check for quadruplet patterns like "abcdabcd"
  const quadrupletRegex = /(.{4})\1{2,}/
  if (quadrupletRegex.test(text)) {
    return true
  }

  // check for quintuplet patterns like "abcdeabcde"
  const quintupletRegex = /(.{5})\1{2,}/
  if (quintupletRegex.test(text)) {
    return true
  }

  return false
}

/**
 * Checks for digraphs (two-letter combinations) that never occur in English words
 */
export function hasInvalidEnglishDigraphs(
  text: string,
  threshold: number = 2
): boolean {
  const invalidDigraphs = [
    'bx',
    'cj',
    // 'cv',  // Sometimes used for curriculum vitae
    'cx',
    'dx',
    'fq',
    // 'fx',  // Sometimes used for FX (effects)
    'gq',
    'gx',
    'hx',
    'jc',
    'jf',
    'jg',
    'jq',
    //  'jv',  // Sometimes used for JV athletics
    'jx',
    'jz',
    'kx',
    'mx',
    // 'px', // Sometimes used for px (pixels)
    'qb',
    'qc',
    'qd',
    'qf',
    'qg',
    'qj',
    'qk',
    'ql',
    'qm',
    'qn',
    'qp',
    'qt',
    'qv',
    'qx',
    'qy',
    'qz',
    'sx',
    'vb',
    'vf',
    'vj',
    'vm',
    // 'vp', // Sometimes used for VP (vice president)
    'vq',
    'vt',
    'vw',
    'vx',
    'wx',
    'xj',
    // 'xx', // Sometimes used in words like "maxx"
    'zx'
  ]

  let foundCount = 0
  for (const digraph of invalidDigraphs) {
    if (text.includes(digraph)) {
      foundCount++
      if (foundCount >= threshold) {
        return true
      }
    }
  }

  return false
}
