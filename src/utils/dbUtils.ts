/**
 * DbUtils
 * @author Adtiya
 * @date 2021/7/1
 */
import initSqlJs, { Database, SqlJsStatic } from 'sql.js';

export default class DbUtils {
  private static database: Database;

  private static async getDatabase() {
    if (this.database) {
      return this.database;
    }
    const sqlPromise: SqlJsStatic = await initSqlJs();
    const dataPromise = fetch('./bi_test_data.sqlite').then((res) =>
      res.arrayBuffer(),
    );
    const [SQL, buf] = await Promise.all([sqlPromise, dataPromise]);
    this.database = new SQL.Database(new Uint8Array(buf));
    return this.database;
  }

  static async selectByTableName(tableName: string) {
    if (!this.database) {
      await this.getDatabase();
    }
    return this.database.exec(`SELECT * from ${tableName}`);
  }
}
