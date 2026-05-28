type ClassValue = string | number | boolean | null | undefined | ClassDictionary | ClassArray;
type ClassDictionary = Record<string, boolean | null | undefined>;
type ClassArray = Array<ClassValue>;

export function cn(...inputs: ClassArray): string {
    const classes: string[] = [];
    for (const input of inputs) {
        if (!input)
            continue;
        if (typeof input === 'string' || typeof input === 'number') {
            classes.push(String(input));
        }
        else if (Array.isArray(input)) {
            classes.push(cn(...input));
        }
        else if (typeof input === 'object') {
            for (const [key, value] of Object.entries(input)) {
                if (value)
                    classes.push(key);
            }
        }
    }
    return classes.join(' ');
}
export function formatDate(date: Date): string {
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
}
export function debounce<T extends (...args: any[]) => unknown>(func: T, wait: number) {
    let timeout: ReturnType<typeof setTimeout>;
    return (...args: Parameters<T>): void => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), wait);
    };
}
