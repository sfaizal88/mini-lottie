/**
 * File upload component
 * @author - Faizal
 * @date - 12th June 2024
 */
// GENERIC IMPORT
import React from 'react';

type FileUploadProps = {
    onFileUpload: (data: any) => void;
};

const FileUpload = ({
    onFileUpload
}: FileUploadProps ) => {
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
              onFileUpload(JSON.parse(reader.result as string));
            };
            reader.readAsText(file);
        }
    };
    return (
        <>
            <input type="file" accept="application/json" onChange={handleFileChange} />
        </>
    )
};

export default FileUpload;