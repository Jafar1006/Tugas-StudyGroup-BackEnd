
const getTodo = async (id) => {
  // Try-Catch
  try {
    console.log("Mencoba mengambil data...");

    // Await-Fetch
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${id}`
    );

    if (!response.ok) {
      throw new Error("Judul tidak ditemukan di database!");
    }

    const dataAPI = await response.json();
    // Destructuring
    const {title} = dataAPI;

    console.log("Data berhasil didapatkan!");

    return {
      Judul: title
    };
  } catch (error) {
    console.log("Terjadi Error:", error.message);
  } finally {
    console.log("Request Selesai");
  }
};

const main = async () => {
  const sukses = await getTodo(1);
  console.log("✅ Judul Todo:", sukses);

  const gagal = await getTodo(1006);
  console.log("Error:", gagal);
};

main();