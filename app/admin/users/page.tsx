import Pagination from "@/components/shared/pagination";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { deleteUser, getAllUsers } from "@/lib/actions/user.actions";
import { formatId } from "@/lib/utils";
import Link from "next/link";

import DeleteDialog from "@/components/shared/deleteDialog";
import { Badge } from "@/components/ui/badge";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Users",
};

const AdminUsersPage = async (props: {
  searchParams: Promise<{ page: string }>;
}) => {
  const { page = "1" } = await props.searchParams;
  const users = await getAllUsers({
    page: Number(page),
  });
  console.log(users);

  return (
    <div className="space-y-2">
      <h2 className=" h3-bold">Users</h2>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>NAME</TableHead>
              <TableHead>EMAIL</TableHead>
              <TableHead>ROLE</TableHead>
              <TableHead>ACTIONS</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.data.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{formatId(user.id)}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>
                  {user.role === "user" ? (
                    <Badge variant="secondary">{user.role.toUpperCase()}</Badge>
                  ) : (
                    <Badge variant="default">{user.role.toUpperCase()}</Badge>
                  )}
                </TableCell>
                <TableCell>
                  <Button asChild variant="outline" size="sm">
                    <Link href={`admin/users/${user.id}`}>Edit</Link>
                  </Button>
                  {/* DELETE BUTTON */}
                  <DeleteDialog id={user.id} action={deleteUser} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {users.totalPages > 1 && (
          <Pagination page={Number(page) || 1} totalPages={users?.totalPages} />
        )}
      </div>
    </div>
  );
};

export default AdminUsersPage;
