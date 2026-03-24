"use client";

import React, { createContext, useContext, useState, useRef, ReactNode } from 'react';

interface LoadingContextType {
  isAnyCardDisabled: boolean;
  disabledCardId: string | null;
  setCardDisabled: (cardId: string | null) => void;
  setCardDisabledWithTimeout: (cardId: string, timeout?: number) => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export function LoadingProvider({ children }: { children: ReactNode }) {
  const [disabledCardId, setDisabledCardId] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const setCardDisabled = (cardId: string | null) => {
    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setDisabledCardId(cardId);
  };

  const setCardDisabledWithTimeout = (cardId: string, timeout: number = 1000) => {
    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

    // Set disabled immediately
    setDisabledCardId(cardId);

    // Set timeout to re-enable
    timeoutRef.current = setTimeout(() => {
      setDisabledCardId(null);
      timeoutRef.current = null;
    }, timeout);
  };

  const isAnyCardDisabled = disabledCardId !== null;

  return (
    <LoadingContext.Provider value={{ 
      isAnyCardDisabled, 
      disabledCardId, 
      setCardDisabled,
      setCardDisabledWithTimeout
    }}>
      {children}
    </LoadingContext.Provider>
  );
}

export function useLoading() {
  const context = useContext(LoadingContext);
  if (context === undefined) {
    throw new Error('useLoading must be used within a LoadingProvider');
  }
  return context;
}
