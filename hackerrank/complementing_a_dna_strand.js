/*
    A DNA string is made up of four symbols: A, T, C and G.
    Each symbol has a complement
        - A and T complement each other.
        - C and G complement each other.

    Determine the reverse complement of a DNA string by reversing the symbols in the string and replacing each
    symbols in the reversed string by its complement.

    Example:
        s = GTCAG
            - reverse the string GTCAG => GACTG
            - replace each symbol by its complement GACTG => CTGAC
            - the reverse complement of DNA string is CTGAC

    I/O:
    Input: ACCGGGTTTT   →   string s = "ACCGGGTTTT"
    Output: AAAACCCGGT

    I/O:
    Input: ATGC       →     string s = "ATGC"
    Output: GCAT

    I/O:
    Input: ATCGTA     →    string s = "ATCGTA"
    Output: TACGAT

*/ 
function dnaComplement(s) {
    // Write your code here
    const complementPairs = {
        'A': 'T',
        'T': 'A',
        'C': 'G',
        'G': 'C'
    }
    
    const reversed = s.split('').reverse();
    
    return reversed.map(e => {
        return complementPairs[e];
    }).join('');
}