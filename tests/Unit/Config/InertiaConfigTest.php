<?php

declare(strict_types=1);

it('uses the inertia v3 page configuration structure', function (): void {
    expect(config('inertia.pages.ensure_pages_exist'))->toBeFalse()
        ->and(config('inertia.pages.paths'))->toBe([
            resource_path('js/pages'),
        ])
        ->and(config('inertia.pages.extensions'))->toBe([
            'js',
            'jsx',
            'svelte',
            'ts',
            'tsx',
            'vue',
        ])
        ->and(config('inertia.testing.ensure_pages_exist'))->toBeTrue()
        ->and(config('inertia.testing.page_paths'))->toBeNull()
        ->and(config('inertia.testing.page_extensions'))->toBeNull();
});
