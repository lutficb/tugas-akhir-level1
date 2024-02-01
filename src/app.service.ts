/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  // List User
  getUser(): User[] {
    return dataUser;
  }

  // Detail User
  detailUser(id: number): User | string {
    const indexUser = dataUser.findIndex((user) => user.id === Number(id));
    if (indexUser !== -1) {
      return dataUser[indexUser];
    } else {
      return 'Data user dengan id = ' + id + ' tidak ditemukan';
    }
  }

  // Add user baru
  addUser(newUser: User): User[] {
    newUser.id = Math.floor(Math.random() * 1000) + 1;
    dataUser.push(newUser);
    return dataUser;
  }

  // Update data user
  updateUser(id: number, updateData: Partial<User>): User | string {
    const indexUser = dataUser.findIndex((user) => user.id === Number(id));
    if (indexUser !== -1) {
      dataUser[indexUser] = { ...dataUser[indexUser], ...updateData };
      const result = dataUser[indexUser];
      return result;
    } else {
      return 'Data dengan id tersebut tidak ditemukan';
    }
  }

  // Delete user
  deleteUser(id: number): User | string {
    const indexUser = dataUser.findIndex((user) => user.id === Number(id));
    if (indexUser !== -1) {
      const result = dataUser[indexUser];
      dataUser.splice(indexUser, 1);
      return result;
    } else {
      return 'Data dengan id tersebut tidak ditemukan';
    }
  }
}

// Interface User
export interface User {
  id: number;
  nama: string;
  email: string;
  umur: number;
  tanggal_lahir: string;
  status: boolean;
}

// Dummy Data
const dataUser: User[] = [
  {
    id: 123,
    nama: 'Paiman Sudarsono',
    email: 'paiamansudarsono@gmail.com',
    umur: 32,
    tanggal_lahir: '22 Januari 1991',
    status: true,
  },
  {
    id: 321,
    nama: 'Jatmiko Handerson',
    email: 'jatmikohanderson@gmail.com',
    umur: 35,
    tanggal_lahir: '10 Januari 1991',
    status: true,
  },
];
