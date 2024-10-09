document.addEventListener("DOMContentLoaded", function() {
    const data = [
        { no: 1, id: 'S002', book: 'C++', borrower: 'Bagus', borrowDate: '01/Feb/2023', dueDate: '08/Feb/2023', returnDate: '10/Mar/2023', penalty: 33000 },
        { no: 2, id: 'S001', book: 'Matematika', borrower: 'Edi', borrowDate: '01/Feb/2023', dueDate: '08/Feb/2023', returnDate: '10/Mar/2023', penalty: 33000 },
        { no: 3, id: 'S003', book: 'Fisika', borrower: 'Dewi', borrowDate: '03/Feb/2023', dueDate: '10/Feb/2023', returnDate: '15/Feb/2023', penalty: 0 },
        { no: 4, id: 'S004', book: 'Kimia', borrower: 'Sari', borrowDate: '05/Feb/2023', dueDate: '12/Feb/2023', returnDate: '12/Feb/2023', penalty: 0 },
        { no: 5, id: 'S005', book: 'Biologi', borrower: 'Budi', borrowDate: '10/Feb/2023', dueDate: '17/Feb/2023', returnDate: '17/Feb/2023', penalty: 0 },
        { no: 6, id: 'S006', book: 'Sejarah', borrower: 'Rina', borrowDate: '15/Feb/2023', dueDate: '22/Feb/2023', returnDate: '28/Feb/2023', penalty: 10000 },
        { no: 7, id: 'S007', book: 'Geografi', borrower: 'Andi', borrowDate: '20/Feb/2023', dueDate: '27/Feb/2023', returnDate: '05/Mar/2023', penalty: 15000 },
        { no: 8, id: 'S008', book: 'Ekonomi', borrower: 'Yuni', borrowDate: '25/Feb/2023', dueDate: '04/Mar/2023', returnDate: '10/Mar/2023', penalty: 20000 },
        { no: 9, id: 'S009', book: 'Sosiologi', borrower: 'Bayu', borrowDate: '01/Mar/2023', dueDate: '08/Mar/2023', returnDate: '09/Mar/2023', penalty: 5000 },
        { no: 10, id: 'S010', book: 'Antropologi', borrower: 'Wahyu', borrowDate: '05/Mar/2023', dueDate: '12/Mar/2023', returnDate: '15/Mar/2023', penalty: 8000 }
    ];

    const rowsPerPage = 5;
    let currentPage = 1;
    const totalPages = Math.ceil(data.length / rowsPerPage);

    function renderTable(page) {
        const tableBody = document.getElementById('table-body');
        tableBody.innerHTML = ''; // Clear existing rows

        const start = (page - 1) * rowsPerPage;
        const end = start + rowsPerPage;
        const paginatedData = data.slice(start, end);

        paginatedData.forEach(row => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${row.no}</td>
                <td>${row.id}</td>
                <td>${row.book}</td>
                <td>${row.borrower}</td>
                <td>${row.borrowDate}</td>
                <td>${row.dueDate}</td>
                <td>${row.returnDate}</td>
                <td>Rp. ${row.penalty.toLocaleString()}</td>
            `;
            tableBody.appendChild(tr);
        });

        document.getElementById('page-info').innerText = `Page ${page} of ${totalPages}`;

        // Update total penalty for the current page
        const totalPenalty = paginatedData.reduce((acc, row) => acc + row.penalty, 0);
        document.getElementById('total-penalty').innerText = `Total Denda: Rp. ${totalPenalty.toLocaleString()}`;
    }

    function nextPage() {
        if (currentPage < totalPages) {
            currentPage++;
            renderTable(currentPage);
        }
    }

    function prevPage() {
        if (currentPage > 1) {
            currentPage--;
            renderTable(currentPage);
        }
    }

    // Attach functions to buttons
    document.getElementById('nextBtn').addEventListener('click', nextPage);
    document.getElementById('prevBtn').addEventListener('click', prevPage);

    // Initial table render
    renderTable(currentPage);
});
