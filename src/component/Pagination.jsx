"use client";

import { Pagination } from "@heroui/react";
import Link from "next/link";


export function PaginationBasic({ property }) {
    const page = property.page
    const pages = property.totalPage
    const totalPages = []
    for (let i = 1; i <= pages; i++) {
        totalPages.push(i)
    }
    console.log(totalPages, 'from pagnation');
    return (
        <Pagination className="justify-center">
            <Pagination.Content>
                <Pagination.Item>
                    <Link href={`allProperty?page=${page - 1}`}>
                        <Pagination.Previous isDisabled={page === 1}>
                            <Pagination.PreviousIcon />

                            <span>Previous</span>
                        </Pagination.Previous>
                    </Link>


                </Pagination.Item>
                {Array.from(totalPages).map((p) => (
                    <Pagination.Item key={p}>
                        <Link href={`allProperty?page=${p}`}>
                            <Pagination.Link isActive={p === page}>
                                {p}
                            </Pagination.Link>
                        </Link>
                    </Pagination.Item>
                ))}
                <Pagination.Item>
                    <Link href={`allProperty?page=${page + 1}`}>
                        <Pagination.Next isDisabled={page === totalPages}>
                            <span>Next</span>
                            <Pagination.NextIcon />
                        </Pagination.Next>
                    </Link>

                </Pagination.Item>
            </Pagination.Content>
        </Pagination>
    );
}