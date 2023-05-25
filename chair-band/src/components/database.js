export function sendGloryHole(payload) {
    const key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp4aGlzanpwYnpiY2ZhZ2tidWpyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODUwMTU4NjIsImV4cCI6MjAwMDU5MTg2Mn0.YJgUK2YHynBjw6u2HAv1xeyvj_2-VzCoIgxyj1RCLpM'
    const url = "https://zxhisjzpbzbcfagkbujr.supabase.co";

    fetch(url + "/rest/v1/GloryHole", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            apikey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp4aGlzanpwYnpiY2ZhZ2tidWpyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODUwMTU4NjIsImV4cCI6MjAwMDU5MTg2Mn0.YJgUK2YHynBjw6u2HAv1xeyvj_2-VzCoIgxyj1RCLpM',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp4aGlzanpwYnpiY2ZhZ2tidWpyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODUwMTU4NjIsImV4cCI6MjAwMDU5MTg2Mn0.YJgUK2YHynBjw6u2HAv1xeyvj_2-VzCoIgxyj1RCLpM',
            Prefer: "return-representation",

        },
        body: JSON.stringify(payload),
    })

}

export function sendNewsletter(payload) {
    const key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp4aGlzanpwYnpiY2ZhZ2tidWpyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODUwMTU4NjIsImV4cCI6MjAwMDU5MTg2Mn0.YJgUK2YHynBjw6u2HAv1xeyvj_2-VzCoIgxyj1RCLpM'
    const url = "https://zxhisjzpbzbcfagkbujr.supabase.co";

    fetch(url + "/rest/v1/Newsletter", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            apikey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp4aGlzanpwYnpiY2ZhZ2tidWpyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODUwMTU4NjIsImV4cCI6MjAwMDU5MTg2Mn0.YJgUK2YHynBjw6u2HAv1xeyvj_2-VzCoIgxyj1RCLpM',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp4aGlzanpwYnpiY2ZhZ2tidWpyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODUwMTU4NjIsImV4cCI6MjAwMDU5MTg2Mn0.YJgUK2YHynBjw6u2HAv1xeyvj_2-VzCoIgxyj1RCLpM',
            Prefer: "return-representation",

        },
        body: JSON.stringify(payload),
    })

}