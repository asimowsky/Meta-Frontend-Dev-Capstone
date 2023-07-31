import React from "react";

export const Table = ({ headings, data }) => {
    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-md text-gray-700 uppercase bg-white-50 dark:bg-white-700 dark:text-gray-400">
                    <tr>
                        {headings.map((heading, index) => (
                            <th key={index} scope="col" className="px-6 py-3">
                                {heading}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((rowData, rowIndex) => (
                        <tr
                            className={
                                rowIndex % 2 === 0 ? "bg-gray-700" : "bg-white"
                            }
                            key={rowIndex}
                        >
                            {rowData.map((cellData, columnIndex) => (
                                <td className="px-6 py-4" key={columnIndex}>
                                    {cellData}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
