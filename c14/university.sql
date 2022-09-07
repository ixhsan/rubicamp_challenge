.headers on
.mode column 

create table mahasiswa(
    nim varchar(9) primary key not null,
    nama varchar(50) not null,
    alamat text,
    jurusan varchar(50)
);

insert into
    mahasiswa(nim, nama, alamat, jurusan)
values
    ('001', 'fikry', 'bandung', 'teknik mesin'),
    ('002', 'eko', 'sragen', 'teknik industri'),
    ('003', 'yoga', 'pamulang', 'teknik fisika');

create table matakuliah(
    kodematkul varchar(10) primary key not null,
    nama varchar(50) not null,
    sks character(1) not null
);

insert into
    matakuliah(kodematkul, nama, sks)
values
    ('D01', 'fisika', '2'),
    ('D02', 'kimia', '2'),
    ('E01', 'pneumatik', '4'),
    ('E02', 'mesin listrik', '4'),
    ('E03', 'digital', '4'),
    ('B01', 'manajemen', '4'),
    ('B02', 'PAB', '2'),
    ('C01', 'olahraga', '1');

create table jurusan(
    idjurusan varchar(50) primary key not null,
    nama_jurusan varchar(50) not null
);

insert into
    jurusan('idjurusan', 'nama_jurusan')
values
    ('901', 'teknik fisika'),
    ('902', 'teknik industri'),
    ('903', 'teknik pangan'),
    ('904', 'teknik mesin');

create table dosen(nip varchar primary key not null, nama varchar(50) not null, matakuliah varchar(50) not null);

insert into
    dosen('nip', 'nama', 'matakuliah')
values
    ('A001', 'toto', 'fisika'),
    ('A002', 'ari', 'kimia'),
    ('A003', 'diah', 'kimia'),
    ('A004', 'riki', 'mesin listrik'),
    ('A005', 'doni', 'pneumatik dan hidrolik'),
    ('A006', 'hadi', 'digital'),
    ('A007', 'afaf', 'manajemen'),
    ('A008', 'aldi', 'olahraga'),
    ('A009', 'lia', 'pengelolaan alat dan bahan');