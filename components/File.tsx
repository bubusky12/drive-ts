"use client";

import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
  TextField,
  Button,
  Snackbar,
  Alert,
} from "@mui/material";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import FolderIcon from "@mui/icons-material/Folder";

interface File {
  name: string;
  type: "folder" | "file";
  modified: string;
  users: number;
  size: string;
}

const FileList: React.FC = () => {
  const [files, setFiles] = useState<File[]>(() => {
    const storedFiles = localStorage.getItem("files");
    return storedFiles
      ? JSON.parse(storedFiles)
      : [
          { name: "Berbagi Folder", type: "folder", modified: "Kemaren 16:50", users: 3, size: "1.2 MB" },
          { name: "Facturation", type: "folder", modified: "Kemaren 16:50", users: 1, size: "9.8 MB" },
          { name: "Project saya", type: "folder", modified: "Kemaren 16:50", users: 1, size: "2 MB" },
          { name: "File Gapenting", type: "file", modified: "08 Januari 2022", users: 0, size: "9 MB" },
        ];
  });

  const [newFolderName, setNewFolderName] = useState<string>("");
  const [showSnackbar, setShowSnackbar] = useState<boolean>(false);

  useEffect(() => {
    localStorage.setItem("files", JSON.stringify(files));
  }, [files]);

  const getCurrentTime = (): string => {
    const now = new Date();
    const options: Intl.DateTimeFormatOptions = { hour: "2-digit", minute: "2-digit" };
    return now.toLocaleTimeString("id-ID", options);
  };

  const handleAddFolder = (): void => {
    if (newFolderName.trim() !== "") {
      setFiles([
        ...files,
        { name: newFolderName, type: "folder", modified: getCurrentTime(), users: 0, size: "-" },
      ]);
      setNewFolderName("");
    } else {
      setShowSnackbar(true);
    }
  };

  const handleDelete = (index: number): void => {
    setFiles(files.filter((_, i) => i !== index));
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh", padding: "20px" }}>
      <div style={{ marginBottom: "20px", display: "flex", alignItems: "center", gap: "10px" }}>
        <TextField
          label="Nama Folder"
          variant="outlined"
          value={newFolderName}
          onChange={(e) => setNewFolderName(e.target.value)}
          style={{ flex: 1 }}
        />
        <Button variant="contained" color="primary" onClick={handleAddFolder}>
          Tambah Folder
        </Button>
      </div>

      <TableContainer component={Paper} style={{ flex: 1, overflow: "auto" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Modified On</TableCell>
              <TableCell>Users</TableCell>
              <TableCell>Size</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {files.map((file, index) => (
              <TableRow key={index}>
                <TableCell>
                  {file.type === "folder" ? (
                    <FolderIcon style={{ marginRight: 8, color: "orange" }} />
                  ) : (
                    <InsertDriveFileIcon style={{ marginRight: 8, color: "blue" }} />
                  )}
                  {file.name}
                </TableCell>
                <TableCell>{file.modified}</TableCell>
                <TableCell>
                  {file.users > 0 ? (
                    Array.from({ length: file.users }).map((_, i) => (
                      <Avatar key={i} style={{ margin: "0 5px", display: "inline-block" }}>
                        U
                      </Avatar>
                    ))
                  ) : (
                    <span>No Users</span>
                  )}
                </TableCell>
                <TableCell>{file.size}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="error"
                    size="small"
                    onClick={() => handleDelete(index)}
                  >
                    Hapus
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Snackbar
        open={showSnackbar}
        autoHideDuration={3000}
        onClose={() => setShowSnackbar(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert onClose={() => setShowSnackbar(false)} severity="warning" sx={{ width: "100%" }}>
          Nama folder tidak bisa kosong
        </Alert>
      </Snackbar>
    </div>
  );
};

export default FileList;
