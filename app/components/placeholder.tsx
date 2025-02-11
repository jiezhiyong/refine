// UI 占位符
export function PlaceholderDemo1() {
  return (
    <>
      <div className="grid auto-rows-min gap-4 md:grid-cols-3">
        <div className="bg-muted aspect-video rounded-xl" />
        <div className="bg-muted aspect-video rounded-xl" />
        <div className="bg-muted aspect-video rounded-xl" />
      </div>
      <div className="bg-muted min-h-[100vh] flex-1 rounded-xl md:min-h-min" />
    </>
  );
}

export function PlaceholderDemo2() {
  return (
    <>
      <div className="bg-muted min-h-[100vh] flex-1 rounded-xl md:min-h-min" />
      <div className="grid auto-rows-min gap-4 md:grid-cols-3">
        <div className="bg-muted aspect-video rounded-xl" />
        <div className="bg-muted aspect-video rounded-xl" />
        <div className="bg-muted aspect-video rounded-xl" />
      </div>
    </>
  );
}

export function PlaceholderDemo3() {
  return (
    <>
      <div className="grid auto-rows-min gap-4 md:grid-cols-2">
        <div className="bg-muted aspect-video rounded-xl" />
        <div className="bg-muted aspect-video rounded-xl" />
      </div>
      <div className="bg-muted min-h-[100vh] flex-1 rounded-xl md:min-h-min" />
    </>
  );
}

export function PlaceholderDemo4() {
  return (
    <>
      <div className="bg-muted min-h-[100vh] flex-1 rounded-xl md:min-h-min" />
      <div className="grid auto-rows-min gap-4 md:grid-cols-4">
        <div className="bg-muted aspect-video rounded-xl" />
        <div className="bg-muted aspect-video rounded-xl" />
        <div className="bg-muted aspect-video rounded-xl" />
        <div className="bg-muted aspect-video rounded-xl" />
      </div>
    </>
  );
}

export function PlaceholderDemo5() {
  return (
    <>
      {Array.from({ length: 12 }).map((_, index) => (
        <div key={index} className="bg-muted/50 aspect-video h-24 w-full rounded-lg" />
      ))}
    </>
  );
}

export function PlaceholderDemo6() {
  return (
    <div className="grid auto-rows-min gap-4 md:grid-cols-5">
      {Array.from({ length: 25 }).map((_, i) => (
        <div key={i} className="bg-muted/50 aspect-square rounded-xl" />
      ))}
    </div>
  );
}
