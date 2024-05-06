// React + Web3 Essentials

// Internal Components

// Internal Configs

export const traceStackCalls = () => {
  const stack = new Error().stack || '';
  const stackLines = stack.split('\n');
  const caller = stackLines[3] || 'Caller not found'; // The 0th line is "Error", the 1st line is this function, the 2nd line is the function that called this function, and the 3rd line is the caller we're interested in.
  console.debug(`src::helpers::DebugHelper::traceStackCalls::Caller ${caller.trim()}`);
};
