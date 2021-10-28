// @ts-ignore
import React, { useMemo, useState } from "react";

export function ReactComponent() {
	const [v, set] = useState(0);

	// NOTE: Test that babel-plugin-transform-hook-names can process this as well.
	const _unusedState = useState(0 as any);
	const _unusedMemo = useMemo<number>(() => _unusedState[0], [_unusedState[0]]);

	return (
		<div>
			<p>Counter: {v}</p>
			<button onClick={() => set(v + 1)}>update</button>
		</div>
	);
}
