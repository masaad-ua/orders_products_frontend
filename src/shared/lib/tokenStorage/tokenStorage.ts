export class TokenStorage {

    private keyForToken: string = "accessToken";

    async set (value: string): Promise<void>{
        localStorage.setItem(this.keyForToken, value)
    }

    get(): string | null {
        return localStorage.getItem(this.keyForToken);
    }
    remove(): void {
        localStorage.removeItem(this.keyForToken);
    }

    has(): boolean {
        return !!localStorage.getItem(this.keyForToken);
    }
}

export const tokenStorage = new TokenStorage();