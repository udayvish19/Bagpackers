const form = document.getElementById('myForm');
      const formData = {};

      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const elements = form.elements;
        for (let i = 0; i < elements.length; i++) {
          const element = elements[i];
          formData[element.name] = element.value;
        }
        console.log(formData);
        // You can now store the formData object in local storage, send it to a server, or do whatever you want with it
      });