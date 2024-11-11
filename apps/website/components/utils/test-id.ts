export interface TestIdProps {
  testId?: string;
}

export const getTestIdValue = (
  testId: string | undefined | null,
  suffix: string
): string | null => (testId ? testId + "-" + suffix : null);
