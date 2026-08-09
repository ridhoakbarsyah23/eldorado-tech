Add-Type -AssemblyName System.IO.Compression.FileSystem
$path = "c:\Users\RIDHO\Downloads\PRD_Eldorado_Tech.docx"
try {
    $zip = [System.IO.Compression.ZipFile]::OpenRead($path)
    $entry = $zip.Entries | Where-Object { $_.FullName -eq 'word/document.xml' }
    if ($entry) {
        $reader = New-Object System.IO.StreamReader($entry.Open())
        $xmlStr = $reader.ReadToEnd()
        $reader.Close()
        $xmlStr = $xmlStr -replace '<w:p[^>]*>', "`n" # Add newlines for paragraphs
        $xmlStr = $xmlStr -replace '<[^>]+>', ''      # Remove all other XML tags
        $xmlStr = $xmlStr -replace '&lt;', '<'
        $xmlStr = $xmlStr -replace '&gt;', '>'
        $xmlStr = $xmlStr -replace '&amp;', '&'
        $xmlStr.Trim()
    } else {
        Write-Output "Could not find word/document.xml in the archive."
    }
} catch {
    Write-Output "Error: $_"
} finally {
    if ($zip) { $zip.Dispose() }
}
