// Type definitions for table-layout v0.2.3
// Project: https://github.com/75lb/table-layout
// Definitions by: Jordi Oliveras Rovira <https://github.com/j-oliveras>

declare namespace TableLayout {
  export interface ColumnOptions {
    /**
     * Column name, must match a property name in the input.
     */
    name: string;

    /**
     * Column width.
     */
    width?: number;

    /**
     * Column min width.
     */
    minWidth?: number;

    /**
     * Column max width.
     */
    maxWidth?: number;

    /**
     * Disable wrapping for this column.
     */
    noWrap?: boolean;

    /**
     * Disable line-trimming for this column.
     */
    noTrim?: boolean;

    /**
     * Enable word-breaking for this columns.
     */
    break?: boolean;

    /**
     * Padding options.
     */
    padding?: {
      /**
       * A string to pad the left of each cell.
       *
       * @default ' '
       */
      left?: string;

      /**
       * A string to pad the right of each cell.
       *
       * @default ' '
       */
      right?: string;
    };
  }

  export interface Options {
    /**
     * Maximum width of layout.
     */
    maxWidth?: number;

    /**
     * Disable wrapping on all columns.
     */
    noWrap?: boolean;

    /**
     * Disable line-trimming for this column.
     */
    noTrim?: boolean;

    /**
     * Enable word-breaking on all columns.
     */
    break?: boolean;

    /**
     * Options for a column.
     */
    columns?: Array<ColumnOptions>;

    /**
     * If set, empty columns or columns containing only whitespace are not rendered.
     */
    ignoreEmptyColumns?: boolean;

    /**
     * Padding values to set on each column.
     * Per-column overrides can be set in the columns option.
     */
    padding?: {
      /**
       * A string to pad the left of each cell.
       */
      left?: string;

      /**
       * A string to pad the right of each cell.
       */
      right?: string;
    };
  }
}

declare class TableLayout {
  public constructor(data: Array<any>, options?: TableLayout.Options);

  /**
   * Identical to .toString() with the exception that the result will be an array of lines, rather than a single, multi-line string.
   */
  public renderLines(): Array<string>;

  /**
   * Returns the input data as a text table.
   */
  public toString(): string;
}

export = TableLayout;
