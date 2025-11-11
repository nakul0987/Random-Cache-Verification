document.addEventListener('DOMContentLoaded',()=>{

    const cacheTaker=document.querySelector('.cacheGenerator');
    const btn=document.querySelector('.submitBtn');
    const takeInput=document.querySelector('.cacheInput');
    let generatedCache='';

    async function getCache() {
        const baseUrl = 'https://www.randomnumberapi.com/api/v1.0/randomstring?min=5&max=20&count=1';
        const apiUrl = 'https://api.codetabs.com/v1/proxy?quest=' + baseUrl + '&t=' + Date.now();

        try {
            const response = await fetch(apiUrl);
            const text = await response.text();
            const data = JSON.parse(text);
            // console.log(data[0]);
            generatedCache=data[0];
            cacheTaker.innerHTML=generatedCache;
        } catch (err) {
            console.error("Error fetching random string:", err);
        }
    }


    btn.addEventListener('click',()=>{

        if (takeInput.value.trim() === '') {
            getCache();
        }
        else {
            if (takeInput.value === generatedCache) {
                alert("✅ Successfully Login");
            } else {
                alert("❌ Invalid Cache! Try Again");
            }
        }

    });

});
