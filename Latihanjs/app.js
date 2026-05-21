import student from "./models/student.js";
import BankAccount from "./models/BankAccount.js";

const mhs1 = new student("Budi", 21, "221110001", "informatika");
mhs1.greet();
mhs1.study();

const rekeningMhs= new BankAccount(mhs1.name);
rekeningMhs.deposit(200000);
rekeningMhs.withdraw(50000);


document.getElementById("output").innerHTML = `
<h2> Data Mahasiswa </h2>
<p><strong>Nama:</strong> ${mhs1.name}</p>
<p><strong>umur:</strong> ${mhs1.age}</p>
<p><strong>NIM:</strong> ${mhs1.nim}</p>
<p><strong>jurusan:</strong> ${mhs1.major}</p>
<p><strong>saldo Akhir:</strong>
Rp${rekeningMhs.getBlanace().toLocaleString('id-ID')}</p>
`;


 








