export class HttpClient {
    public static async post (url: string, data: any): Promise<any> {
        try {
            const response = await fetch(url, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({ data }),
        });
  
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        return await response.json();
        } catch (error) {
            console.error('Error:', (error as Error).message);
        }
    }
}