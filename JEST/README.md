Unit Testing
Coverage & Quality of Test
Test Coverage

Definition: A measure of how much of your codebase is executed when your test suite runs.

Types of Coverage:

Statement Coverage → Have all statements run?

Branch Coverage → Have all possible branches (if/else, switch) run?

Function Coverage → Have all functions been called in tests?

Line Coverage → Have all lines of code been executed?

High coverage is good, but not everything — 100% coverage does not guarantee bug-free code.

Test Quality

A good test should be:

Reliable → Same result every time (no flakiness).

Readable → Easy to understand purpose and result.

Relevant → Tests actual use cases, not internal implementation.

Maintainable → Easy to update when code changes.

Jest Documentation Notes
1. Getting Started
What is Jest?

A JavaScript Testing Framework for projects using Babel, React, etc.

Works with zero configuration in most setups.

Test File Conventions

Test files usually end with .test.js or .spec.js.

Jest automatically finds and runs these files.

Running Tests

Tests are run with the jest command (commonly aliased as npm test).

Jest executes all tests and reports results with pass/fail status.

Writing Tests

Tests are written using test (or it).

Each test contains assertions with expect to validate results.

2. Using Matchers
Purpose of Matchers

Matchers are used with expect to verify values.

They compare actual vs. expected outcomes.

Categories of Matchers

Equality Matchers → Exact value or deep equality checks.

Truthiness Matchers → Check if a value is null, undefined, truthy, or falsy.

Number Matchers → Greater than, less than, approximate equality.

String Matchers → Match substrings or regex patterns.

Array & Iterable Matchers → Verify items exist in a collection.

Exception Matchers → Check if a function throws an error (and validate its message).

Negation

.not can be added to invert matchers (e.g., value is not equal).

3. Testing Asynchronous Code
Why Special Handling?

By default, Jest tests finish once execution reaches the end.

Async code (promises, callbacks, async/await) needs special handling to ensure tests wait for completion.

Testing with Promises

A test can return a promise so Jest waits until it resolves/rejects.

Useful for checking both success and failure scenarios.

Testing with Async/Await

Mark the test as async.

Use await to pause until the operation finishes.

Cleaner and easier than raw promises.

Testing Rejected Promises

Use Jest helpers .rejects and .resolves.

expect.assertions(number) ensures the correct number of assertions run and prevents silent test passes.

Testing with Callbacks

For APIs that use callbacks:

Pass a done argument to the test.

Jest waits until done is called.

If done is never called → test fails with a timeout.

Errors must be caught and passed to done(error).

4. Setup and Teardown
Purpose

Manage resources and state before/after tests.

Common for DB connections, server setup, clearing state, mocks.

Hooks Available

beforeEach → Runs before each test.

afterEach → Runs after each test.

beforeAll → Runs once before all tests in a file.

afterAll → Runs once after all tests in a file.

Scope of Hooks

Declared globally → apply to all tests.

Declared inside describe blocks → apply only to grouped tests.

Async Setup/Teardown

Hooks can return promises, use async/await, or handle callbacks.

Ensures Jest waits for setup/cleanup to finish before moving on.

Execution Order

Hooks run in the order they are declared.

Wrap around tests like layers:

beforeAll → beforeEach → test → afterEach → afterAll
