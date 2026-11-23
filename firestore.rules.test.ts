/**
 * Dirty Dozen Security Specification Cases for JurisMentor Firestore Rules.
 * Documents and validates boundary/identity invariants enforced by firestore.rules.
 */

export interface SecurityTestCase {
  id: string;
  description: string;
  path: string;
  operation: 'get' | 'list' | 'create' | 'update' | 'delete';
  expected: 'PERMISSION_DENIED';
  payload?: Record<string, unknown>;
}

export const DIRTY_DOZEN_CASES: SecurityTestCase[] = [
  {
    id: 'DD-01',
    description: 'Unauthenticated read of student studyProfile',
    path: '/users/user_abc/studyProfile/main',
    operation: 'get',
    expected: 'PERMISSION_DENIED',
  },
  {
    id: 'DD-02',
    description: 'Cross-user get on another student simulado result',
    path: '/users/user_abc/simuladoResults/sim_1',
    operation: 'get',
    expected: 'PERMISSION_DENIED',
  },
  {
    id: 'DD-03',
    description: 'Unverified email write to user profile',
    path: '/users/user_abc',
    operation: 'create',
    expected: 'PERMISSION_DENIED',
    payload: { uid: 'user_abc', email: 'unverified@example.com' },
  },
  {
    id: 'DD-04',
    description: 'Shadow/ghost field injection (isAdmin: true) on studyProfile',
    path: '/users/user_abc/studyProfile/main',
    operation: 'create',
    expected: 'PERMISSION_DENIED',
    payload: { ownerId: 'user_abc', isAdmin: true },
  },
  {
    id: 'DD-05',
    description: 'Identity spoofing with mismatched ownerId on questionMarks',
    path: '/users/user_abc/questionMarks/q_1',
    operation: 'create',
    expected: 'PERMISSION_DENIED',
    payload: { ownerId: 'attacker_xyz', questionId: 'q_1', inErrorNotebook: true, isBookmarked: false },
  },
  {
    id: 'DD-06',
    description: 'Mutating immutable ownerId on activeSessions update',
    path: '/users/user_abc/activeSessions/current',
    operation: 'update',
    expected: 'PERMISSION_DENIED',
    payload: { ownerId: 'attacker_xyz' },
  },
  {
    id: 'DD-07',
    description: 'Forged client timestamp instead of server request.time',
    path: '/users/user_abc/studyProfile/main',
    operation: 'update',
    expected: 'PERMISSION_DENIED',
    payload: { updatedAt: '2020-01-01T00:00:00.000Z' },
  },
  {
    id: 'DD-08',
    description: 'Path ID poisoning with invalid characters',
    path: '/users/user_abc/questionMarks/bad$id',
    operation: 'create',
    expected: 'PERMISSION_DENIED',
  },
  {
    id: 'DD-09',
    description: 'Resource exhaustion title string > 200 chars in simuladoResults',
    path: '/users/user_abc/simuladoResults/sim_1',
    operation: 'create',
    expected: 'PERMISSION_DENIED',
    payload: { title: 'A'.repeat(250) },
  },
  {
    id: 'DD-10',
    description: 'Oversized queueRefs array (> 250 items) in activeSessions',
    path: '/users/user_abc/activeSessions/current',
    operation: 'create',
    expected: 'PERMISSION_DENIED',
  },
  {
    id: 'DD-11',
    description: 'Terminal outcome tampering on completed simuladoResults update',
    path: '/users/user_abc/simuladoResults/sim_1',
    operation: 'update',
    expected: 'PERMISSION_DENIED',
    payload: { scorePercentage: 100 },
  },
  {
    id: 'DD-12',
    description: 'Blanket directory enumeration on /users',
    path: '/users',
    operation: 'list',
    expected: 'PERMISSION_DENIED',
  },
];
