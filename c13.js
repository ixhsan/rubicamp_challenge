const { writeFile } = require("node:fs");
const fs = require("node:fs");

const [a, b, userInput, numInput, ...arr] = process.argv;
const userInputNum = parseInt(numInput);
const getTime = new Date();
const timeFormat = `${getTime.getHours()}:${getTime.getMinutes()}`;
const dataFormat = { task: "sample", status: [" "], time: " " };
let resultMessage = "no message";

let dataPath = "./c13_data.json";
let dataSource = JSON.parse(fs.readFileSync(dataPath, "utf-8"));

// FUNGSI WRITE FILE
const updateData = (message) => {
  fs.promises
    .writeFile(dataPath, JSON.stringify(dataSource), "utf-8")
    .then(() => console.log(`${message}`))
    .catch(console.error());
};

// CHECK ARGUMENT
if (userInput.length <= 2) {
  console.log(`>>> JS TODO <<<
node todo.js <userInput>
node todo.js list 
node todo.js task <task_id>
node todo.js add <task_content>
node todo.js delete <task_id>
node todo.js complete <task_id>
node todo.js uncomplete <task_id>
node todo.js list:outstanding <task_id>
node todo.js list:completed asc||desc
node todo.js tag <task_id> <tag_name_1> <tag_name_2> ... <tag_name_N>
node todo.js complete <task_id>
node todo.js filter:<tagname>\n`);
} else {
  // LIST Command
  if (userInput === "list") {
    let index = 1;
    for (let i in dataSource) {
      console.log(`${index}. [${dataSource[i].status}] ${dataSource[i].task}`);
      index++;
    }
  }
  // TASK Command
  else if (userInput === "task") {
    console.log(`this is <TASK> userInput`);
  }
  // ADD Command
  else if (userInput === "add") {
    //Tambah tugas baru
    dataFormat.task = arr.join(" ");
    dataSource.push(dataFormat);

    //Tambah waktu penambahan
    dataFormat.time = timeFormat;
    resultMessage = `"${dataFormat.task}" telah ditambahkan.`;

    // Test output
    updateData(resultMessage);
  }
  // DELETE Command
  else if (userInput === "delete") {
    if (userInputNum <= dataSource.length) {
      // let index = parseInt(userInput[3]) - 1;
      resultMessage = `"${dataSource[userInputNum - 1].task
        }" telah dihapus dari daftar`;
      dataSource.splice(userInputNum - 1, 1);
      // TEST OUTPUT
      updateData(resultMessage);
    } else {
      console.log(
        `Operasi gagal!, sepertinya kamu mencari data yang tidak ada.`
      );
    }
  }
  // COMPLETE Command
  else if (userInput === "complete") {
    if (
      userInputNum <= dataSource.length &&
      dataSource[userInputNum - 1].status.toString() === " "
    ) {
      // Driver code
      dataSource[userInputNum - 1].status.splice(0, 1, "X");
      resultMessage = `"${dataSource[userInputNum - 1].task}" telah selesai.`;
      // Data update
      updateData(resultMessage);
    } else {
      console.log(
        `Operasi gagal!, sepertinya kamu mencari data yang tidak ada,\natau statusnya telah selesai.`
      );
    }
  }
  // UNCOMPLETED Command
  else if (userInput === "uncomplete") {
    if (userInputNum <= dataSource.length && dataSource[userInputNum - 1].status.toString() === "X"
    ) {
      // Driver code
      dataSource[userInputNum - 1].status.splice(0, 1, " ");
      resultMessage = `"${dataSource[userInputNum - 1].task
        }" status selesai dibatalkan.`;
      // Data update
      updateData(resultMessage);
    } else {
      console.log(`Operasi gagal!, sepertinya kamu mencari data yang tidak ada,\natau statusnya telah selesai.`);
    }
  }
  // TAG Command
  else if (userInput === "tag") {
    if (userInputNum <= dataSource.length) {
      //Driver Code
      for (let i in arr) {
        dataSource[userInputNum - 1].tag.push(arr[i]);
      }

      resultMessage = `Tag '${arr.toString()}' telah ditambahkan ke daftar '${dataSource[userInputNum - 1].task}'`;

      updateData(resultMessage);
    } else {
      console.log(`Operasi gagal!, sepertinya kamu mencari data yang tidak ada.`);
    }
  }
  // FILTER Command
  else if (userInput === "filter") {
    console.log(`berhasil ${userInput}`);
  }
  // LIST OUTSTANDING Command
  else if (userInput === "list:outstanding") {
    if (arr[0] === "asc") {
      // Input ASC

      dataSource.sort((a, z) => {
        return a.time.localeCompare(z.time);
      });

      let index = 1;
      for (let i in dataSource) {
        if (dataSource[i].status.toString() === " ") {
          console.log(`${index}. [${dataSource[i].status}] ${dataSource[i].task}\t\t\t\t\t\t${dataSource[i].time}`);
          index++;
        }
      }
    } else if (arr[0] === "desc") {
      // Input DESC

      dataSource.sort((a, z) => {
        return z.time.localeCompare(a.time);
      });

      let index = 1;
      for (let i in dataSource) {
        if (dataSource[i].status.toString() === " ") {
          console.log(`${index}. [${dataSource[i].status}] ${dataSource[i].task}\t\t\t\t\t\t${dataSource[i].time}`);
          index++;
        }
      }
    } else {
      // Error Handling
      console.log(`Operasi gagal! Silahkan masukan opsi pengurutan: asc | desc`);
    }
  }
  // LIST COMPLETED Command
  else if (userInput === "list:completed") {
    if (arr[0] === "asc") {
      // Input ASC

      dataSource.sort((a, z) => {
        return a.time.localeCompare(z.time);
      });

      let index = 1;
      for (let i in dataSource) {
        if (dataSource[i].status.toString() === "X") {
          console.log(`${index}. [${dataSource[i].status}] ${dataSource[i].task}\t\t\t\t\t\t${dataSource[i].time}`);
          index++;
        }
      }
    } else if (arr[0] === "desc") {
      // Input DESC

      dataSource.sort((a, z) => {
        return z.time.localeCompare(a.time);
      });

      let index = 1;
      for (let i in dataSource) {
        if (dataSource[i].status.toString() === "X") {
          console.log(`${index}. [${dataSource[i].status}] ${dataSource[i].task}\t\t\t\t\t\t${dataSource[i].time}`);
          index++;
        }
      }
    } else {
      // Error Handling
      console.log(`Operasi gagal! Silahkan masukan opsi pengurutan: asc | desc`);
    }
  }
  // TEST Command
  else if (userInput === "test") {
  }
}
