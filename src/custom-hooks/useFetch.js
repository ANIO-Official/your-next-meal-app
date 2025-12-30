import { useState, useEffect } from 'react';



export default function useFetch(url, options) {
    const [data, setData] = useState (
        url.includes('categories') ? 
        { categories: []} :
        { meals: [] } //For both showing meals from categories and meals by id. Same format in API
    );
    const [loading, setLoading] = useState (true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!url) return;

        const controller = new AbortController();
        setData(
            url.includes('categories') ? 
            { categories: []} : //retrieve categories
            url.includes('filter') ?
            { meals: [] } : //retrieve recipes/meals of the category
            { meals: [{}]} //retrieve singular meal
        );
        setError(null);
        setLoading(true);

        const fetchData = async () => {
            try {
                const response = await fetch(url, { ...options, signal: controller.signal });
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const result = await response.json();
                console.log('Data came through!')
                setData(result);
            } catch (error) {
                if (error.name !== 'AbortError') {
                    console.log('Data encountered an error!')
                    setError(error);
                }
            } finally {
                setLoading(false);
            }
        };

        fetchData();

        // Cleanup function
        return () => {
            controller.abort();
        };
    }, [url, options]); // Re-run if url or options change

    return { data, loading, error };
}
