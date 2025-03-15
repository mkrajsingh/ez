async function submitEmail() {
    const email = document.getElementById('email').value.trim();
    const responseElement = document.getElementById('response');
  
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      responseElement.textContent = "⚠️ Please enter a valid email address.";
      responseElement.style.color = "red";
      return;
    }
  
    try {
      const res = await fetch('https://test.ezworks.ai/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
      });
  
      const result = await res.json();
      console.log("Response:", result); // Debug log
  
      if (res.ok) {
        responseElement.textContent = "✅ Success: " + (result.message || "You’re subscribed!");
        responseElement.style.color = "green";
      } else {
        responseElement.textContent = "❌ Error: " + (result.message || "Something went wrong.");
        responseElement.style.color = "red";
      }
    } catch (error) {
      console.error("Fetch error:", error);
      responseElement.textContent = "❌ Network Error. Please try again.";
      responseElement.style.color = "red";
    }
  }
  

  