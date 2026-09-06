Add-Type -AssemblyName System.Drawing

$destinations = @(
    @{ name = 'amalfi'; c1 = '#FDBA74' },
    @{ name = 'oregon'; c1 = '#334155' },
    @{ name = 'reykjavik'; c1 = '#14532D' },
    @{ name = 'banff'; c1 = '#475569' },
    @{ name = 'sedona'; c1 = '#EA580C' },
    @{ name = 'kyoto'; c1 = '#064E3B' },
    @{ name = 'lisbon'; c1 = '#FEF08A' },
    @{ name = 'venice'; c1 = '#991B1B' },
    @{ name = 'tamarindo'; c1 = '#F97316' },
    @{ name = 'tulum'; c1 = '#0284C7' },
    @{ name = 'maldives'; c1 = '#38BDF8' }
)

foreach ($d in $destinations) {
    $bmp = New-Object System.Drawing.Bitmap 800, 600
    $g = [System.Drawing.Graphics]::FromImage($bmp)

    $col1 = [System.Drawing.ColorTranslator]::FromHtml($d.c1)
    $brush = New-Object System.Drawing.SolidBrush $col1
    $g.FillRectangle($brush, 0, 0, 800, 600)

    # Darker bottom landscape silhouette
    $darkCol = [System.Drawing.Color]::FromArgb(255, 15, 23, 42)
    $darkBrush = New-Object System.Drawing.SolidBrush $darkCol
    $g.FillRectangle($darkBrush, 0, 360, 800, 240)

    # Accent hill / wave triangle
    $pts = @(
        (New-Object System.Drawing.Point 0, 360),
        (New-Object System.Drawing.Point 300, 240),
        (New-Object System.Drawing.Point 600, 380),
        (New-Object System.Drawing.Point 800, 300),
        (New-Object System.Drawing.Point 800, 360)
    )
    $accentBrush = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(200, 30, 41, 65))
    $g.FillPolygon($accentBrush, $pts)

    # Text label
    $font = New-Object System.Drawing.Font('Arial', 28, [System.Drawing.FontStyle]::Bold)
    $textBrush = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(255, 255, 255, 255))
    $g.DrawString($d.name.ToUpper(), $font, $textBrush, 40, 500)

    $outPath = "public\ui\" + $d.name + ".png"
    $bmp.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Png)

    $g.Dispose()
    $bmp.Dispose()
}

# Generate logo.png
$logoBmp = New-Object System.Drawing.Bitmap 180, 48
$lg = [System.Drawing.Graphics]::FromImage($logoBmp)
$lBrush = New-Object System.Drawing.SolidBrush ([System.Drawing.ColorTranslator]::FromHtml('#FF6F59'))
$lg.FillEllipse($lBrush, 4, 8, 32, 32)

$lTextBrush = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::White)
$lFont = New-Object System.Drawing.Font('Arial', 16, [System.Drawing.FontStyle]::Bold)
$lg.DrawString("V", $lFont, $lTextBrush, 13, 12)

$lTextFont = New-Object System.Drawing.Font('Arial', 14, [System.Drawing.FontStyle]::Bold)
$lg.DrawString("Vibe & Go", $lTextFont, $lTextBrush, 42, 12)

$logoBmp.Save("public\ui\logo.png", [System.Drawing.Imaging.ImageFormat]::Png)
$lg.Dispose()
$logoBmp.Dispose()

Write-Host "Generated PNG images and logo.png successfully!"
