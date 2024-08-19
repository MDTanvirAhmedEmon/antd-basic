"use client";
import { Pagination } from "antd";
import { useState } from "react";

const AntdPagination = () => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const totalItems = 500;
    const [pageSize, setPageSize] = useState<number>(10);

    const handleShowSizeChange = (current: number, size: number) => {
        console.log("Current",current)
        console.log("Size",size)
        setPageSize(size);
        setCurrentPage(current); 
    };

    const handlePageChange = (page: number, pageSize?: number) => {
        setCurrentPage(page);
        console.log(`Current page: ${page}`);
    };

    return (
        <div>
            <Pagination 
                onShowSizeChange={handleShowSizeChange} 
                defaultPageSize={20} 
                onChange={handlePageChange} 
                current={currentPage} 
                total={totalItems} 
                pageSize={pageSize}
            />
        </div>
    );
};

export default AntdPagination;
