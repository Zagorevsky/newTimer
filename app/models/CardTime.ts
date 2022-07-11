import { Realm, createRealmContext } from "@realm/react";

export class CardTime extends Realm.Object {
  _id!: Realm.BSON.ObjectId;
  description!: string;
  dataStart!: number;
  dataFinish!: number;
  time!: number;

  static generate(title: string, dataStart: number, dataFinish: number, time: number) {
    return {
      _id: new Realm.BSON.ObjectId(),
      title,
      dataStart,
      dataFinish,
      time,
    };
  }

  static schema = {
    name: "CardTime",
    primaryKey: "_id",
    properties: {
      _id: "objectId",
      title: "string",
      dataStart: "int",
      dataFinish: "int",
      time: "int",
    },
  };
}

export default createRealmContext({
  schema: [CardTime],
  deleteRealmIfMigrationNeeded: true,
});
