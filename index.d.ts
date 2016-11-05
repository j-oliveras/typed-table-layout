// Type definitions for table-layout v0.2.3
// Project: https://github.com/75lb/table-layout
// Definitions by: Jordi Oliveras Rovira <https://github.com/j-oliveras>

declare namespace tableLayout {
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
    nowrap?: boolean;

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
    nowrap?: boolean;

    /**
     * Enable word-breaking on all columns.
     */
    break?: boolean;

    /**
     * Options for a column.
     */
    columns?: Array<ColumnOptions>;

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

  /**
   * Identical to the default function with the exception
   * of the rendered result being returned as an array of
   * lines, rather that a single string.
   */
  export function lines(data: Array<any>, options?: Options): Array<string>;
}

/**
 * Render the data into an string.
 */
declare function tableLayout(data: Array<any>, options?: tableLayout.Options): string;

export = tableLayout;
