class Table {
  constructor(init) {
    this.init = init;
  }

  createHeader(data) {
    let open = "<thead><tr class='bg-primary text-white'>";
    let close = "</tr></thead>";
    data.forEach((d) => {
      open += `<th>${d}</th>`;
    });

    return open + close;
  }

  createBody(data) {
    let open = "<tbody>";
    let close = "</tbody>";

    data.forEach((d) => {
      open += `
          <tr>
            <td>${d[0]}</td>
            <td>${d[1]}</td>
            <td>${d[2]}</td>
            <td>${d[3]}</td>
          </tr>
        `;
    });

    return open + close;
  }

  render(element) {
    let table =
      "<table class='table table-hover text-start border border-primary table-bordered'>" +
      this.createHeader(this.init.columns) +
      this.createBody(this.init.data) +
      "</table>";
    element.innerHTML = table;
  }
}

const table = new Table({
  columns: ["Nama", "Umur", "Kelas", "Nilai"],
  data: [
    ["Budi", "17", "12 SMA", "85"],
    ["Dodi", "18", "12 SMA", "75"],
    ["Ekang", "16", "11 SMA", "80"],
    ["Siti", "17", "12 SMA", "90"],
  ],
});
const app = document.getElementById("app");
table.render(app);
