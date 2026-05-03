// --- Filter Functionality ---
document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const filterValue = button.getAttribute('data-filter');
        const cards = document.querySelectorAll('.card');

        cards.forEach(card => {
            if (filterValue === 'all' || card.getAttribute('data-cat') === filterValue) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// --- Modal Functionality ---
function openModal(name, price, img, desc, type) {
    const modal = document.getElementById('dishModal');
    document.getElementById('modalTitle').innerText = name;
    document.getElementById('modalPrice').innerText = price;
    document.getElementById('modalImg').src = img;
    document.getElementById('modalDesc').innerText = desc;

    // Reset Options
    const pizzaOpt = document.getElementById('pizzaOptions');
    const portionOpt = document.getElementById('burgerOptions');
    
    pizzaOpt.style.display = 'none';
    portionOpt.style.display = 'none';

    // Logic for Options
    if (type === 'pizza') {
        pizzaOpt.style.display = 'block';
    } 
    else if (type === 'portion' || type === 'main' || type === 'street' || type === 'chinese') {
        portionOpt.style.display = 'block';
    }

    modal.style.display = 'block';
    
    // WhatsApp Link (Order with details)
    const waNumber = "923214659841";
    const waLink = `https://wa.me/${waNumber}?text=Assalam-o-Alaikum, I want to order: ${name} (${price})`;
    document.getElementById('waButton').href = waLink;
}

function closeModal() {
    document.getElementById('dishModal').style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == document.getElementById('dishModal')) {
        closeModal();
    }
}