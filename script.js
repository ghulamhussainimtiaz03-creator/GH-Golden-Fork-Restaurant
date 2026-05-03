// Filter Functionality
const filterButtons = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('.card');

filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const category = btn.getAttribute('data-filter');

        cards.forEach(card => {
            if (category === 'all' || card.getAttribute('data-cat') === category) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// Modal Functionality
function openModal(name, price, desc, imgPath) {
    // Modal mein text fill karna
    document.getElementById('modalTitle').innerText = name;
    document.getElementById('modalPrice').innerText = price;
    document.getElementById('modalDesc').innerText = desc;
    
    // Modal mein Picture set karna
    document.getElementById('modalImg').src = imgPath;

    // WhatsApp Link update karna
    let number = "923214659841"; // Apna number yahan likhein
    let message = "Assalam-o-Alaikum, I want to order: " + name + " (" + price + ")";
    document.getElementById('waButton').href = "https://wa.me/" + number + "?text=" + encodeURIComponent(message);

    // Modal ko show karna
    document.getElementById('dishModal').style.display = "block";
}

function closeModal() {
    document.getElementById('dishModal').style.display = "none";
}

// Close if clicked outside
window.onclick = function(event) {
    let modal = document.getElementById('dishModal');
    if (event.target == modal) closeModal();
}
function openModal(name, price, desc, imgPath, type) {
    document.getElementById('modalTitle').innerText = name;
    document.getElementById('modalPrice').innerText = price;
    document.getElementById('modalDesc').innerText = desc;
    document.getElementById('modalImg').src = imgPath;

    // Agar item Pizza hai toh options dikhao, warna chhupa do
    const options = document.getElementById('optionsContainer');
    if (type === 'pizza') {
        options.style.display = 'block';
    } else {
        options.style.display = 'none';
    }

    // WhatsApp Order Functionality
    const orderBtn = document.getElementById('waButton');
    orderBtn.onclick = function() {
        let flavor = document.getElementById('flavorSelect').value;
        let size = document.getElementById('sizeSelect').value;
        
        let finalMsg = `Assalam-o-Alaikum, I want to order:\n\n*Item:* ${name}`;
        if (type === 'pizza') {
            finalMsg += `\n*Flavor:* ${flavor}\n*Size:* ${size}`;
        }
        finalMsg += `\n*Price:* ${price}`;

        let number = "9230314659841"; // Apna number yahan likhein
        orderBtn.href = "https://wa.me/" + number + "?text=" + encodeURIComponent(finalMsg);
    };

    document.getElementById('dishModal').style.display = "block";
}
function openModal(name, price, desc, imgPath, type) {
    document.getElementById('modalTitle').innerText = name;
    document.getElementById('modalPrice').innerText = price;
    document.getElementById('modalDesc').innerText = desc;
    document.getElementById('modalImg').src = imgPath;

    // Reset all options first
    document.getElementById('pizzaOptions').style.display = 'none';
    document.getElementById('burgerOptions').style.display = 'none';

    // Show options based on type
    if (type === 'pizza') {
        document.getElementById('pizzaOptions').style.display = 'block';
    } else if (type === 'burger') {
        document.getElementById('burgerOptions').style.display = 'block';
    }

    const orderBtn = document.getElementById('waButton');
    orderBtn.onclick = function() {
        let details = "";
        
        if (type === 'pizza') {
            let f = document.getElementById('pizzaFlavor').value;
            let s = document.getElementById('pizzaSize').value;
            details = `\n*Flavor:* ${f}\n*Size:* ${s}`;
        } else if (type === 'burger') {
            let f = document.getElementById('burgerFlavor').value;
            details = `\n*Type:* ${f}`;
        }

        let finalMsg = `Assalam-o-Alaikum, I want to order:\n\n*Item:* ${name}${details}\n*Price:* ${price}`;
        let number = "923214659841"; 
        orderBtn.href = "https://wa.me/" + number + "?text=" + encodeURIComponent(finalMsg);
    };

    document.getElementById('dishModal').style.display = "block";
}
function openModal(name, price, desc, imgPath, type) {
    // Basic details set karna
    document.getElementById('modalTitle').innerText = name;
    document.getElementById('modalPrice').innerText = price;
    document.getElementById('modalDesc').innerText = desc;
    document.getElementById('modalImg').src = imgPath;

    // Pehle dono containers ko chhupa do (Reset)
    document.getElementById('pizzaOptions').style.display = 'none';
    document.getElementById('burgerOptions').style.display = 'none';

    // Check karo ke kaunsa option dikhana hai
    if (type === 'pizza') {
        document.getElementById('pizzaOptions').style.display = 'block';
    } 
    else if (type === 'burger') {
        document.getElementById('burgerOptions').style.display = 'block';
    }

    // WhatsApp Button Logic
    const orderBtn = document.getElementById('waButton');
    orderBtn.onclick = function() {
        let details = "";
        
        if (type === 'pizza') {
            let f = document.getElementById('pizzaFlavor').value;
            let s = document.getElementById('pizzaSize').value;
            details = `\n*Flavor:* ${f}\n*Size:* ${s}`;
        } 
        else if (type === 'burger') {
            let f = document.getElementById('burgerFlavor').value;
            details = `\n*Burger Type:* ${f}`;
        }

        let finalMsg = `Assalam-o-Alaikum, I want to order:\n\n*Item:* ${name}${details}\n*Price:* ${price}`;
        let number = "923214659841"; // Apna WhatsApp Number yahan likhein
        orderBtn.href = "https://wa.me/" + number + "?text=" + encodeURIComponent(finalMsg);
    };

    document.getElementById('dishModal').style.display = "block";
}