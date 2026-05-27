export default async function ApplicationDetailPage({
  params
}: Readonly<{ params: Promise<{ id: string }> }>) {
  const { id } = await params;

  return (
    <main className="min-h-screen bg-[#f7f7f4] px-6 py-8 text-slate-950">
      <div className="mx-auto w-full max-w-4xl">
        <p className="text-sm font-medium text-teal-700">Application #{id}</p>
        <h1 className="mt-1 text-2xl font-semibold tracking-normal">지원 상세</h1>
        <div className="mt-8 rounded-lg border border-dashed border-slate-300 bg-white p-8 text-slate-600">
          지원 정보, 상태 변경, 자기소개서 문항 관리가 들어갈 자리입니다.
        </div>
      </div>
    </main>
  );
}
