import assert from 'assert';
import sinon from 'sinon';
import { describe, it, expect, vi } from 'vitest';

describe('Array', function () {
    describe('#indexOf()', function () {
        it('should return -1 when the value is not present', function () {
            assert.strictEqual([1, 2, 3].indexOf(4), -1);
        });

        it('should call console.log once using Sinon', function () {
            const logSpy = sinon.spy(console, 'log');

            console.log('Testing...');
            assert.strictEqual(logSpy.calledOnce, true);

            logSpy.restore();
        });
    });
});
