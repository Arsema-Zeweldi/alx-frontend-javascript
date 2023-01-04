/// <reference path="./crud/d/tz" />

import rowID from "./interface";
import rowElement from "./interface";
import * as CRUD from "./crud";

const row: RowElement {
  firstName: Guillaume,
  lastName: Salva,
};

const newRowID: RowID = CRUD.insertRow(row);
const updatedRow: RowElement = { age: 23, ...row };

CRUD.updateRow(newRowID, UpdateRow);
CRUD.deleteRow(newRowID);
