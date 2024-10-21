document.getElementById('calculate').addEventListener('click', () => {
    // Get input values
    const desiredWeight = parseFloat(document.getElementById('desiredWeight').value);
    const barWeight = parseFloat(document.getElementById('barWeight').value);

    // Check if input values are valid
    if (isNaN(desiredWeight) || isNaN(barWeight) || desiredWeight <= barWeight) {
        alert('Please enter valid weights.');
        return;
    }

    // Plate sizes available (each plate is per side)
    const plateSizes = [45, 25, 10, 5, 2.5];

    // Calculate the total weight for both sides of the bar
    let weightPerSide = (desiredWeight - barWeight) / 2;
    let plates = [];

    // Calculate the required plates
    for (let plate of plateSizes) {
        let count = Math.floor(weightPerSide / plate);
        if (count > 0) {
            plates.push(`${count} x ${plate} lbs`);
            weightPerSide -= count * plate;
        }
    }

    // Output the result
    const plateList = document.getElementById('plateList');
    plateList.innerHTML = ''; // Clear previous results

    if (plates.length > 0) {
        plates.forEach(plate => {
            let li = document.createElement('li');
            li.textContent = plate;
            plateList.appendChild(li);
        });
    } else {
        plateList.innerHTML = '<li>No plates required</li>';
    }
});
