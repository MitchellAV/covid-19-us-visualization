fetch("https://api.covidtracking.com/v1/states/ca/daily.json")
	.then((res) => res.json())
	.then((data) => main(data));

const main = (data) => {
	const table = document.createElement("table");
	table.classList.add("sortable");
	const header = document.createElement("tr");

	let headerCreated = false;
	data.forEach((day) => {
		const dayArray = Object.entries(day);
		const row = document.createElement("tr");

		dayArray.forEach((column) => {
			if (!headerCreated) {
				const headings = document.createElement("th");
				headings.innerHTML = column[0];
				header.appendChild(headings);
			}

			const entry = document.createElement("td");
			entry.innerHTML = column[1];
			row.appendChild(entry);
		});

		if (!headerCreated) {
			table.appendChild(header);
			headerCreated = true;
		}
		table.appendChild(row);
	});
	document.body.appendChild(table);
};
