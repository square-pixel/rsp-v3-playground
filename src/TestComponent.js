import React, { useState, useEffect } from 'react';
import { Cell, Column, Row, TableView, TableBody, TableHeader } from '@react-spectrum/table';

export function useCounter(ms) {
    const [value, setValue] = useState(0);

    useEffect(() => {
        const id = setInterval(() => setValue((prev) => prev + 1), ms);
        return () => clearInterval(id);
    }, [ms]);
    return value;
}

export function useTickTock(ms) {
    const i = useCounter(ms);
    return Boolean(i % 2);
}

export function TestComponent(props) {
    const tickTock = useTickTock(2000);

    let rows = [];

    const rowsData1 = [
        ['1', 'B', 'C'],
        ['2', 'B', 'C'],
        ['3', 'B', 'C'],
        ['4', 'B', 'C'],
        ['5', 'B', 'C'],
    ];

    const rowsData2 = [
        ['1', 'B', 'C'],
        ['2', 'B', 'C'],
        ['5', 'B', 'C'],
    ];

    if (tickTock) {
        rows = rowsData1;
    } else {
        rows = rowsData2;
    }

    return (
        <TableView
            sortDescriptor={{ column: 'id', direction: tickTock ? 'ascending' : 'descending' }}
            aria-label="Example table with static contents"
            selectionMode="multiple"
            selectedKeys={['2', '4']}
        >
            <TableHeader>
                <Column allowsSorting={true} key="id">ID</Column>
                <Column>Some Column</Column>
                <Column>Another Column</Column>
            </TableHeader>
            <TableBody loadingState={'error'}>
                {rows.map((row) => (
                    <Row key={row[0]}>
                        {row.map((cell) => (
                            <Cell>{cell}</Cell>
                        ))}
                    </Row>
                ))}
            </TableBody>
        </TableView>
    );
}
