import React, { useState, useEffect } from 'react';
import { MaterialReactTable, useMaterialReactTable, MRT_ColumnDef } from 'material-react-table';
import './Dashboard.css';

interface Job {
  id: number;
  jobReference: string;
  hospital: string;
  department: string;
  position: string;
  duration: string;
  contact: string;
  deadline: string;
  link: string;
}

const url = process.env.REACT_APP_HCR_URL || '';

const Dashboard: React.FC = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [selectedRows, setSelectedRows] = useState<number[]>([]);

  useEffect(() => {
    fetchJobsData();
  }, []);

  const fetchJobsData = async () => {
    try {
      console.log(url); // Log the URL to the console
      const response = await fetch(url);
      const data = await response.json();
      setJobs(data);
    } catch (error) {
      console.error('Error fetching jobs data:', error);
    }
  };

  const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    const selectedData = checked ? jobs.map((job) => job.id) : [];
    setSelectedRows(selectedData);
  };

  const handleRowSelect = (id: number) => {
    const index = selectedRows.indexOf(id);
    if (index === -1) {
      setSelectedRows([...selectedRows, id]);
    } else {
      setSelectedRows(selectedRows.filter((rowId) => rowId !== id));
    }
  };

  const csvData = selectedRows.map((id) => {
    const job = jobs.find((j) => j.id === id);
    return job ? {
      hospital: job.hospital,
      department: job.department,
      position: job.position,
      duration: job.duration,
      contact: job.contact,
      deadline: job.deadline,
      link: job.link,
    } : null;
  }).filter(Boolean);

  const columns: MRT_ColumnDef<Job>[] = [
    {
      accessorKey: 'hospital',
      header: 'Hospital',
    },
    {
      accessorKey: 'department',
      header: 'Department',
    },
    {
      accessorKey: 'position',
      header: 'Position',
    },
    {
      accessorKey: 'duration',
      header: 'Duration',
    },
    {
      accessorKey: 'contact',
      header: 'Contact',
    },
    {
      accessorKey: 'deadline',
      header: 'Deadline',
    },
    {
      accessorKey: 'link',
      header: 'Link',
      Cell: ({ cell }) => {
        const linkValue = cell.getValue() as string | undefined; // Explicitly cast to string | undefined
        return (
          <a href={linkValue} target="_blank" rel="noopener noreferrer">
            {linkValue}
          </a>
        );
      },
    }
  ];
  

  const table = useMaterialReactTable({
    columns,
    data: jobs,
    initialState: { showColumnFilters: true },
  });

  return (
    <div className="container">
      <div style={{ overflowX: 'auto' }} className="table-container">
        <h4>Total Records: {jobs.length}</h4>
        <MaterialReactTable table={table} />
      </div>
    </div>
  );
};

export default Dashboard;
