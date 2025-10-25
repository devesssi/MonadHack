import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";
import { spawnSync } from "child_process";

export async function POST(req: Request) {
  const { source } = await req.json();

  const tmpDir = path.join(process.cwd(), "sandbox/contracts");
  await fs.mkdir(tmpDir, { recursive: true });

  const filePath = path.join(tmpDir, "GeneratedContract.sol");
  await fs.writeFile(filePath, source);

  const deploy = spawnSync(
    "forge",
    [
      "create",
      filePath + ":MyContract",
      "--rpc-url",
      process.env.RPC_URL!,
      "--private-key",
      process.env.PRIVATE_KEY!,
    ],
    { cwd: process.cwd() }
  );

  return NextResponse.json({
    stdout: deploy.stdout.toString(),
    stderr: deploy.stderr.toString(),
  });
}
