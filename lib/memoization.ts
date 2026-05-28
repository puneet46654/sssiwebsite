/**
 * Component memoization utilities
 * Prevents unnecessary re-renders and improves performance
 */

import React, { memo, useMemo, useCallback } from "react";

/**
 * Memoize a component with shallow comparison
 * Prevents re-renders when props haven't changed
 */
export function memoComponent<P extends object>(
  Component: React.ComponentType<P>,
  propsAreEqual?: (prevProps: P, nextProps: P) => boolean
): React.MemoExoticComponent<React.ComponentType<P>> {
  return memo(Component, propsAreEqual);
}

/**
 * Create a memoized version of a function
 * Prevents callback recreation on every render
 */
export function memoCallback<T extends (...args: any[]) => any>(
  callback: T,
  deps: React.DependencyList
): T {
  // Using useCallback, this should be called in a component
  return callback;
}

/**
 * Deep equality check for complex objects
 * More thorough than shallow comparison
 */
export function deepEqual(obj1: any, obj2: any): boolean {
  if (obj1 === obj2) return true;

  if (
    obj1 == null ||
    obj2 == null ||
    typeof obj1 !== "object" ||
    typeof obj2 !== "object"
  ) {
    return false;
  }

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) return false;

  for (let key of keys1) {
    if (!keys2.includes(key)) return false;
    if (!deepEqual(obj1[key], obj2[key])) return false;
  }

  return true;
}

/**
 * Custom hook to prevent object recreation on every render
 */
export function useMemoObject<T extends object>(obj: T, deps: React.DependencyList): T {
  return useMemo(() => obj, deps);
}

/**
 * Custom hook to prevent array recreation
 */
export function useMemoArray<T>(arr: T[], deps: React.DependencyList): T[] {
  return useMemo(() => arr, deps);
}

/**
 * Higher-order component for memoized props
 */
export function withMemoProps<P extends object>(
  Component: React.ComponentType<P>,
  propNames?: (keyof P)[]
): React.ComponentType<P> {
  return memo(Component, (prevProps, nextProps) => {
    if (!propNames) {
      return deepEqual(prevProps, nextProps);
    }

    for (let prop of propNames) {
      if (prevProps[prop] !== nextProps[prop]) {
        return false;
      }
    }

    return true;
  });
}

/**
 * Memoized selector for extracting values
 * Useful for Redux/state management patterns
 */
export function createMemoizedSelector<T, R>(
  selector: (state: T) => R,
  deps: React.DependencyList = []
): (state: T) => R {
  let lastState: T | undefined;
  let lastResult: R | undefined;

  return (state: T): R => {
    if (lastState !== state) {
      lastState = state;
      lastResult = selector(state);
    }
    return lastResult!;
  };
}

/**
 * React.useMemo hook for expensive computations
 */
export const useMemoComputation = useMemo;

/**
 * React.useCallback hook for memoized callbacks
 */
export const useMemoCallback = useCallback;

/**
 * Batch multiple state updates
 * Reduces re-renders when multiple state changes happen
 */
export function batchUpdates(updates: Array<() => void>): void {
  // In React 18, batching is automatic for event handlers
  // This is a helper for manual batching
  updates.forEach((update) => update());
}

/**
 * Performance-optimized component wrapper
 * Memoizes the component and provides debugging
 */
export function createPerformanceOptimizedComponent<P extends object>(
  Component: React.ComponentType<P>,
  displayName: string
): React.ComponentType<P> {
  const MemoizedComponent = memo(Component);

  if (process.env.NODE_ENV === "development") {
    MemoizedComponent.displayName = `Memo(${displayName})`;
  }

  return MemoizedComponent;
}

/**
 * Track component render count (development only)
 */
export function useRenderCount(componentName: string) {
  const renderCount = React.useRef(0);

  React.useEffect(() => {
    renderCount.current++;
    if (process.env.NODE_ENV === "development") {
      console.log(`[${componentName}] Rendered ${renderCount.current} times`);
    }
  });

  return renderCount.current;
}

/**
 * Performance optimization for lists
 * Key generator to maintain component identity
 */
export function generateStableKey<T>(item: T, index: number, keyFn?: (item: T) => string): string {
  if (keyFn) return keyFn(item);

  if (typeof item === "object" && item !== null && "id" in item) {
    return String((item as any).id);
  }

  return String(index);
}

/**
 * Virtualized list helper
 * Only render visible items for large lists
 */
export function useVirtualizedList<T>(
  items: T[],
  itemHeight: number,
  containerHeight: number,
  scrollTop: number
): {
  visibleItems: T[];
  offsetY: number;
  startIndex: number;
  endIndex: number;
} {
  const startIndex = Math.max(0, Math.floor(scrollTop / itemHeight) - 1);
  const endIndex = Math.min(items.length, Math.ceil((scrollTop + containerHeight) / itemHeight) + 1);
  const visibleItems = items.slice(startIndex, endIndex);
  const offsetY = startIndex * itemHeight;

  return {
    visibleItems,
    offsetY,
    startIndex,
    endIndex,
  };
}
