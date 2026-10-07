// Mock prisma client for all tests
jest.mock('@/lib/prisma', () => ({
  prisma: {
    city: {
      findFirst: jest.fn(),
      findMany: jest.fn(),
    },
    activity: {
      create: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
      findUnique: jest.fn(),
      findMany: jest.fn(),
    },
    trip: {
      create: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
    },
    budgetEstimate: {
      upsert: jest.fn(),
    }
  }
}));
