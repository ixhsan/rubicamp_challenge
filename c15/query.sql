ALTER TABLE
    mahasiswa
ADD
    COLUMN DoB DATE;

UPDATE mahasiswa set DoB = '1997-03-11' WHERE nim = '001';
UPDATE mahasiswa set DoB = '1997-07-03' WHERE nim = '002';
UPDATE mahasiswa set DoB = '1998-09-19' WHERE nim = '003';
UPDATE mahasiswa set DoB = '1999-12-29' WHERE nim = '004';
UPDATE mahasiswa set DoB = '2003-02-01' WHERE nim = '005';

CREATE TABLE kontrak(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    mahasiswa VARCHAR(10) NOT NULL,
    dosen VARCHAR(10) NOT NULL,
    matakuliah VARCHAR(50) NOT NULL,
    nilai VARCHAR(2),
    FOREIGN KEY(mahasiswa) REFERENCES mahasiswa(nim) ON DELETE CASCADE,
    FOREIGN KEY(dosen) REFERENCES dosen(nip) ON DELETE CASCADE,
    FOREIGN KEY(matakuliah) REFERENCES matakuliah(kodematkul) ON DELETE CASCADE
);

INSERT INTO
    kontrak(mahasiswa, dosen, matakuliah, nilai)
VALUES
    ('001', 'A007', 'B01', 'B'),
    ('002', 'A005', 'E01', 'B'),
    ('002', 'A006', 'E03', 'C'),
    ('003', 'A003', 'D02', 'D'),
    ('004', 'A006', 'E03', 'E'),
    ('001', 'A009', 'B02', 'B'),
    ('001', 'A009', 'B02', 'B'),
    ('002', 'A009', 'B02', 'A'),
    ('002', 'A004', 'E02', 'A'),
    ('005', 'A004', 'E02', 'D'),
    ('005', 'A009', 'B02', 'A'),
    ('005', 'A004', 'E02', 'A'),
    ('003', 'A004', 'E02', 'D'),
    ('005', 'A003', 'D03', 'A'),
    ('003', 'A003', 'D03', 'D');

-- Soal nomor 1 - menampilkan seluruh mahasiswa beserta nama jurusannya
SELECT
    *
FROM
    mahasiswa
    INNER JOIN jurusan on mahasiswa.jurusan = jurusan.nama_jurusan 

-- soal nomor 2 - menampilkan mahasiswa yang memiliki umur dibawah 20 tahun
SELECT
    mahasiswa.nim as NIM,
    mahasiswa.nama as Nama
FROM
    mahasiswa
WHERE
    (
        strftime('%Y', 'now') - strftime('%Y', mahasiswa.DoB) < 20
    ) 

-- soal nomor 3 - menampilkan mahasiswa yang memiliki nilai B ke atas
SELECT
    mahasiswa.nim as NIM,
    mahasiswa.nama as Nama,
    matakuliah.nama as Matakuliah
FROM
    mahasiswa,
    kontrak,
    matakuliah
WHERE
    kontrak.nilai IN ('A', 'B') 
    
-- soal nomor 4 - menampilkan mahasiswa yang memiliki jumlah sks lebih dari 10
SELECT
    kontrak.mahasiswa as NIM,
    mahasiswa.nama as Nama,
    sum(matakuliah.sks) as Jumlah_SKS
FROM
    kontrak
    LEFT JOIN matakuliah on matakuliah.kodematkul = kontrak.matakuliah
    LEFT JOIN mahasiswa on mahasiswa.nim = kontrak.mahasiswa
GROUP by
    kontrak.mahasiswa
HAVING
    sum(matakuliah.sks) > 10;
    
-- soal nomor 5 - menampilkan mahasiswa yang mengambil mata kuliah data-mining
select
    kontrak.mahasiswa as 'NIM',
    mahasiswa.nama as 'Nama_mahasiswa',
    matakuliah.nama as 'Matakuliah'
from
    kontrak
    left join matakuliah on matakuliah.kodematkul = kontrak.matakuliah
    left join mahasiswa on mahasiswa.nim = kontrak.mahasiswa
where
    kontrak.matakuliah = 'D03';

-- soal nomor 6 - menampilkan jumlah mahasiswa untuk setiap dosen
select
    dosen.nip as NIP,
    dosen.nama as Nama_Dosen,
    sum(kontrak.mahasiswa) as Jumlah_Mahasiswa
from
    dosen
    left join kontrak on kontrak.dosen = dosen.nip
GROUP by dosen.nama
ORDER by dosen.nip;

-- soal nomor 7 - menampilkan mahasiswa berdasarkan umurnya
select
    mahasiswa.nama as nama,
    strftime('%Y', 'now') - strftime('%Y', mahasiswa.DoB) as umur
from
    mahasiswa
ORDER by umur;

-- soal nomor 8 - menampilkan kontrak matakuliah yang harus diulang
select
    mahasiswa.nim as NIM,
    mahasiswa.nama as Nama,
    mahasiswa.jurusan as Jurusan,
    matakuliah.nama as Matakuliah,
    kontrak.nilai as Nilai
from
    kontrak
    left join mahasiswa on kontrak.mahasiswa = mahasiswa.nim 
    left join matakuliah on kontrak.matakuliah = matakuliah.kodematkul
where
    kontrak.nilai IN ('D', 'E');

-- soal nomor 9 - menampilkan data mahasiswa jurusan dan dosen secara lengkap

select *
from
    kontrak
    left join mahasiswa on kontrak.mahasiswa = mahasiswa.nim
    left join jurusan on idjurusan = mahasiswa.jurusan
    left join dosen on kontrak.dosen = dosen.nip
where
    kontrak.nilai IN ('D', 'E');