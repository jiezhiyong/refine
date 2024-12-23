// UI 占位符
export function PlaceholderDemo1() {
  return (
    <>
      <div className="grid auto-rows-min gap-4 md:grid-cols-3">
        <div className="aspect-video rounded-xl bg-muted" />
        <div className="aspect-video rounded-xl bg-muted" />
        <div className="aspect-video rounded-xl bg-muted" />
      </div>
      <div className="min-h-[100vh] flex-1 rounded-xl bg-muted md:min-h-min" />
    </>
  );
}

export function PlaceholderDemo2() {
  return (
    <>
      <div className="min-h-[100vh] flex-1 rounded-xl bg-muted md:min-h-min" />
      <div className="grid auto-rows-min gap-4 md:grid-cols-3">
        <div className="aspect-video rounded-xl bg-muted" />
        <div className="aspect-video rounded-xl bg-muted" />
        <div className="aspect-video rounded-xl bg-muted" />
      </div>
    </>
  );
}

export function PlaceholderDemo3() {
  return (
    <>
      <div className="grid auto-rows-min gap-4 md:grid-cols-2">
        <div className="aspect-video rounded-xl bg-muted" />
        <div className="aspect-video rounded-xl bg-muted" />
      </div>
      <div className="min-h-[100vh] flex-1 rounded-xl bg-muted md:min-h-min" />
    </>
  );
}

export function PlaceholderDemo4() {
  return (
    <>
      <div className="min-h-[100vh] flex-1 rounded-xl bg-muted md:min-h-min" />
      <div className="grid auto-rows-min gap-4 md:grid-cols-4">
        <div className="aspect-video rounded-xl bg-muted" />
        <div className="aspect-video rounded-xl bg-muted" />
        <div className="aspect-video rounded-xl bg-muted" />
        <div className="aspect-video rounded-xl bg-muted" />
      </div>
    </>
  );
}
